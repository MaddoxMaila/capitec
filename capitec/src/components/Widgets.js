import "./css/Widgets.css";
const Widgets = () => {
    const widgets = [{id:1, name:"Easy Equities", description:"investing made easy", link:"", theme:"red"}];
    return ( 
        <div className="widgets">
            {
                widgets.map(widget =>(
                    <div className="card widget_card" key={widget.id}>
                        <div className="card-content widget_card_content">
                            <div className="row ">
                                <div className="widget_icon red col s2">
                                    Icon
                                </div>
                                <div className="title_description col s9">
                                    <p className={widget.theme+"-text"}>{widget.name}</p>
                                    <p>{widget.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Widgets;