import "./css/Plans.css"
import planIcon from "./assets/plan_white.svg";
import more_blue from "./assets/more_blue.svg";
const Plans = () => {
    const plans = [
        {
            type:[
                {
                    flexible:[
                        {id:1, name:"For December"},
                        {id:2, name: "House Renovation"}
                    ],
                    fixed_term:[
                        {id:1, name: "Mike's School"}
                    ],
                    tax_free:[
                        {id:1, name: "House Hold"}
                    ],
                    credit:[],
                    insurance:[]
                }
            ]
        }
    ];
    console.log(plans);
    const checkLength = (length1, length2, length3)=>{
        if(length1 + length2 + length3 > 1){
            return(
                <div className="card s12 plan_card" >
                    <div className="card-content plan_content">
                        <div className="plan_icon_box blue darken-4">
                            <img src={planIcon} alt="plan icon" className="responsive-img"/>
                        </div>
                        <div className="name_box ">
                            <span className="blue-text text-darken-4 plan_name">{ length1 + length2 + length3 } Savings Plans</span>
                            <img src={more_blue} alt="more" width="5" height="5" className="right responsive-img"/>
                        </div>
                    </div>
                </div>
            )
        }
        if(length1 + length2 + length3 === 1){
            return(
                <div className="card s12" >
                    <div className="card-content">
                        <span>Savings Plan</span>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="plans">
            <div className="row">
                {
                    checkLength(plans[0].type[0].flexible.length,plans[0].type[0].fixed_term.length,plans[0].type[0].tax_free.length)
                }
            </div>
        </div>
     );
}
 
export default Plans;