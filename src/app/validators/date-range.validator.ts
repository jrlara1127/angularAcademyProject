import {FormGroup, ValidatorFn, Validators} from '@angular/forms';


export function createPromoRangeValidator(): any {
    return (form: FormGroup): Validators | null => {

        const start:Date = form.get('startDate')?.value;

        const end:Date = form.get("endDate")?.value;

        if (start && end) {
            const isRangeValid = (end.getTime() - start.getTime() > 0);

            return isRangeValid ? null : {promoPeriod:true};
        }

        return null;
    }
}
