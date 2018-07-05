import {AbstractControl} from '@angular/forms';

export function passwordCheck(control: AbstractControl){
    //console.log(control.root.get('password'));
    if( (control.value !== null || control.value !== undefined) ){
        const confpassValue = control.value;
        const passwordControl = control.root.get('password'); //root will give access of this.form
      
        if(passwordControl){
            const passValue = passwordControl.value;
            if(passValue !== confpassValue){
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}