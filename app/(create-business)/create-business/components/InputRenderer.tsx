export default function inputRender({
  type,
  field,
  formData,
  setFormData,
}: {
  type: string;
  field: string;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}){
    switch(type){
        case "text": 
            return(

            )

        case "dropdown": 
            return(
                
            )

        case "photo": 
            return(
                
            )
    }
}