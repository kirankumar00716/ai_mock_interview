import React from 'react'
// import {Button} from "@/components/ui/button";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues>{
    control:Control<T>;
    name:Path<T>;
    label:string;
    placeholder?:string;
    type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({control,name, label, placeholder, type="text"}:FormFieldProps<T>) => (
    <Controller control={control} name={name} render={({field})=>(
        <FormItem>
            <FormLabel className='label'>{label}</FormLabel>
            <FormControl>
                <Input className='input' placeholder={placeholder} type={type} {...field} />
            </FormControl>
            {/*<FormDescription>*/}
            {/*    This is your public display name.*/}
            {/*</FormDescription>*/}
            <FormMessage />
        </FormItem>
    )}

    />
)
export default FormField
