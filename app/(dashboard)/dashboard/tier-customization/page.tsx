"use client"
import { useEffect, useState } from "react";
import CustomizationContainer from "./components/CustomizationContainer";
import TiersNav from "./components/TiersNav"
import ToggleButton from "../components/ToggleButton";
import { Tier, TierCustomizationInfo } from "@/app/types/types";
import { clientRequestHelper } from "@/app/library/api/clientRequestHelper";

export default function TierCustomization({tierProgressionActivated}: {tierProgressionActivated: boolean}){
    const [index, setIndex] = useState(0);
    const [tierCustomization, setTierCustomization] = useState<TierCustomizationInfo>();
    const [initialTierInfo, setInitialTierInfo] = useState<Tier>();
    const [warningMessage, setWarningMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string| null>();
    

    useEffect(()=> {
        async function getTiers() {
            try{
                const res =  await clientRequestHelper("business/tiers");
                const data: TierCustomizationInfo = await res.json();
    
                if(!res.ok){
                    setErrorMessage("there was an error getting tiers")
                }

                setTierCustomization(data);
                setInitialTierInfo(data.tiers[index]);
            } catch (error){
                console.log("Submit form error", error);
                return false
            }
        }
        getTiers();
        
    }, []);

    if (!tierCustomization) {
        return <div>Loading...</div>;
    }

    const hasChanges = (tierCustomization?.tiers[index].name !== initialTierInfo?.name && tierCustomization.tiers[index].name !== "") || 
                       (tierCustomization?.tiers[index].points !== initialTierInfo?.points && tierCustomization.tiers[index].points !== undefined)|| 
                       tierCustomization?.tiers[index].exclusiveRewards !== initialTierInfo?.exclusiveRewards

    function changeInitialTierInfo(index: number){
        if(!tierCustomization?.tiers[index].id){
            setInitialTierInfo({
                name: "",
                points: 0
            })
            return
        }
        setInitialTierInfo(tierCustomization?.tiers[index]);
    }
                       
    function handleChange(field: string, value: string | number){
        setTierCustomization(prev => {
            if(!prev) return undefined;
            
            return {
                ...prev,
                tiers: prev.tiers.map((tier, i) =>
                    i === index ? {...tier, [field]: field === "points" ? value ==="" ? undefined : Number(value): value} : tier)
            }}
        );
    }

    function newTier(){
        if(!tierCustomization) return

        const tierNotSaved = tierCustomization.tiers.some(tier => tier.id === undefined);

        
        if(tierNotSaved){
            setErrorMessage("You must save the new tier before creating another")
            return
        }

        setTierCustomization(prev =>({...tierCustomization, tiers: [...prev!.tiers, {name: "", points: 0}]}))
    }

    async function toggleTiers(activate: boolean, identifier: string): Promise<boolean>{
        try{
            if(!activate && !warningMessage){
                setWarningMessage(true);
                return false
            }
            const res = await clientRequestHelper("business/toggle-tiers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    id: identifier,
                    activated: activate
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }

            const successMessage = await res.json();

            console.log(successMessage)

            setTierCustomization(successMessage.tierInfo);
            setIndex(0);
            
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    };

    async function createTier(tierData: Tier){
        try{
            const res = await clientRequestHelper("business/create-tier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    tierInfo: tierData
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }
            const successMessage: {success: boolean, tier: Tier} = await res.json();



            setTierCustomization((prevTier) =>{
                if(!prevTier) return 

                const updatedTiers =  prevTier.tiers.map((tier, i) => i === index ? successMessage.tier: tier)

                return {
                    ...prevTier,
                    tiers: updatedTiers.sort((a, b) => a.points - b.points)
                }
            })
            setInitialTierInfo(successMessage.tier);
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    }

    async function updateTier(){
        const tier = tierCustomization?.tiers[index];

        if(tier?.name === ""){
            setErrorMessage("Tier Name cannot be empty")
            return
        }

        if(tier?.points === undefined){
            setErrorMessage("Points must have a value")
            return
        }

        if(!tier?.id){
            createTier(tier); 
            return
        };

        try{
            const res = await clientRequestHelper("business/update-tier", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    tierInfo: tier
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }

            const successMessage: {success: boolean, tier: Tier} = await res.json();

            setTierCustomization((prevTier) =>{
                if(!prevTier) return 

                const updatedTiers = prevTier.tiers.map((tier, i) => i === index ? successMessage.tier: tier)

                return {
                    ...prevTier,
                    tiers: updatedTiers.sort((a, b) =>{
                    if (!a.id && !b.id) return 0;
                    if (!a.id) return 1;
                    if (!b.id) return -1;
                
                    return a.points - b.points;
                })
                }
            })
            
            setInitialTierInfo(successMessage.tier);
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    };

    async function deleteTier(){
        if(!tierCustomization?.tiers[index].id){
            setErrorMessage("Cannot delete a tier that hasnt been saved");
            return
        }
        try{
            const res = await clientRequestHelper("business/delete-tier", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    tierId: tierCustomization?.tiers[index].id
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
            }

            const successMessage: {success: boolean, tier: string} = await res.json();

            tierCustomization && setTierCustomization((prevTiers) => {
                if(!prevTiers) return;
                if(!prevTiers.tiers) return prevTiers;

                if(prevTiers.tiers.length === 1){
                    return{
                        ...prevTiers,
                        tiers: [{
                            name: "",
                            points: 0,
                        }]
                    }
                }

                return{
                    ...prevTiers, 
                    tiers: prevTiers.tiers.filter((tier) => tier.id !== successMessage.tier)
                }
                
            })
            setIndex(index > 0 ? index-1 : 0);
            if(tierCustomization?.tiers.length === 1){
                setInitialTierInfo({
                    name:"",
                    points: 0
                })
            } else {
                setInitialTierInfo(tierCustomization?.tiers[index > 0 ? index-1 : 0]);
            }
        } catch (error){
            console.log("Submit form error", error);
        }
    }

    return(
        <div className="flex-1 flex items-center justify-center gap-20 p-[5cqi]">
            {
                errorMessage &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl transition-all">
                        <h1 className="text-xl font-semibold text-gray-950">Error:</h1>
                        <p className="mt-3 text-sm leading-relaxed text-red-500">{errorMessage}</p>

                        <div className="mt-6 ">
                            <button onClick={(): void => { setErrorMessage(null); }} className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            }
            {warningMessage &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl transition-all">
                    <h1 className="text-xl font-semibold text-gray-950">
                        Are you sure you want to disable Tier Progression?
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        Disabling Tier Progression will delete all the current tiers you have created and any rewards previously associated with these tiers will no longer be associated.
                    </p>

                    <div className="mt-6 flex flex-row-reverse gap-3">
                            <button onClick={(): void => { toggleTiers(false, "tierProgression"); setWarningMessage(false) }} className="cursor-pointer rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 active:bg-red-800 transition-colors">
                            Disable
                            </button>
                            <button onClick={(): void => { setWarningMessage(false); }} className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                            Cancel
                            </button>
                    </div>
                    </div>
                </div>
            }
            <div className="w-[30vw]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Tier Progression</h1>
                    <ToggleButton onToggle={toggleTiers} initial={tierCustomization.activated} identifier="tierProgression" />
                </div>
                <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)]">Create and customize tiers for customers to progress through and earn exclusive rewards</p>
            </div>
            <div>
                <CustomizationContainer 
                    tierInfo={tierCustomization.tiers[index]} 
                    saveTier={updateTier} 
                    removeTier={deleteTier}
                    activation={tierCustomization.activated} 
                    handleInput={handleChange}
                    enableSaveButton={hasChanges}
                /> 
                <div className="flex gap-4 items-center justify-center pt-4">
                    <TiersNav 
                        tiers={tierCustomization.tiers.length} 
                        index={index} 
                        setIndex={setIndex} 
                        activated={tierCustomization.activated} 
                        changeInitialTier={changeInitialTierInfo}/>
                    <button 
                        onClick={tierCustomization.activated ? newTier : undefined} 
                        className={`${tierCustomization.activated && "cursor-pointer"} w-6 h-6 rounded-full ${tierCustomization.activated ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-300"} text-white flex items-center justify-center shadow-lg transition-all`} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            
            </div> 
        </div>
    )
}