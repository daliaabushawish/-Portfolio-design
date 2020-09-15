import React ,{Component} from 'react';
import './Services.css'

class Services extends Component {
  
    render() { 
        return ( 
            <div className="services">
            <h3>services</h3>
            <h2>What we offer</h2>
            <div className="row">
               <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title}
               mydescription={iconObj[0].description}/>
            <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title}
               mydescription={iconObj[1].description}/>
                <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title}
               mydescription={iconObj[2].description}/>
                <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title}
               mydescription={iconObj[3].description}/>
            </div>
            </div>
         );
    }
}
 
const iconObj =[
    {
        icon:<ion-icon name="phone-portrait-outline"></ion-icon>,
        title:'Responsive',
        description:'Looks great on any screen size!',
            },
        {
        icon:<ion-icon name="pencil-outline"></ion-icon>,
        title:'Redesigned',
        description:'Freshly redesigned for Bootstrap 4.',
            },
            {         
            icon:<ion-icon name="thumbs-up-outline"></ion-icon>,
            title:' Favorited',
             description:'Millions of users love Start Bootstrap!',
        },
        {
        icon:<ion-icon name="help-outline"></ion-icon>,
        title:' Question',
        description:'I mustache you a question..',
        },
];
class Icons extends Component {
   
    render() { 
        return (
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h4>{this.props.myTitle}</h4>
        <p>{this.props.mydescription}</p>
            </div>
          );
    }
}
 


export default Services;