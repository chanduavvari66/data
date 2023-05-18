import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigatorLwc extends NavigationMixin(LightningElement) {

    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    
    navigateToObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            }
        })
    }

    navigateToListview(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'list'
            },
            state:{
                filterName:'All'
            }
        })
    }

    navigateToRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015g00000URjfGAAT',
                objectApiName:'Account',
                actionName:'view'// or edit
            }
        })
    }

    navigateToPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Flow_Projects'               
            }
        })
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.youtube.com/'          
            }
        })
    }

    navigateToDefault(){
        const defaultValue = encodeDefaultFieldValues({
            Name:'Hello',
            Phone:'99999 99999'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
            state:{
                defaultFieldValues : defaultValue
            }
        })
    }

    navigateToRelated(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015g00000URjfGAAT',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }

    navigateToLwc(){
        var defination={
            componentDef:'c:salesforceResource'
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

    navigateToVf(){
        this[NavigationMixin.Navigate]({
            type:'standarad__webPage',
            attributes:{
                url:'apex/CreateContact'
            }
        }).then(generatedUrl=>{
            window.open(generatedUrl)
        })
    }
}

