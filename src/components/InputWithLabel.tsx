"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import {
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

type Props = {
    fieldTitle: string,
    nameInSchema: string,
    placeholder?: string,
    labelLeft?: boolean,
    readOnly?: boolean,
}

export function InputWithLabel({ fieldTitle, nameInSchema, placeholder, labelLeft, readOnly }: Props) {
    const form = useFormContext()

    const fieldTitleNoSpaces = fieldTitle.replaceAll(' ', '-')

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem className={labelLeft ? "w-full flex items-center gap-2" : ""}>
                    <FormLabel className={`text-base ${labelLeft ? "w-1/3 mt-2" : ""}`} htmlFor={fieldTitleNoSpaces}>
                        {fieldTitle}
                    </FormLabel>

                    <div className={`flex items-center gap-2 ${labelLeft ? "w-2/3" : "w-full max-w-xs"}`}>
                        <div className="w-full max-w-xs flex items-center rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                            <FormControl>
                                <Input
                                    {...field}
                                    id={fieldTitleNoSpaces}
                                    className="w-full max-w-xs"
                                    placeholder={placeholder || fieldTitle}
                                    readOnly={readOnly}
                                    disabled={readOnly}
                                    value={field.value}
                                    onChange={e => field.onChange(e.target.value)}
                                />
                            </FormControl>
                        </div>
                        {!readOnly ? (
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Clear"
                                title="Clear"
                                className="rounded-mdl grid place-content-center hover:bg-transparent text-red-500 hover:text-rose-400"
                                onClick={e => {
                                    e.preventDefault()
                                    form.setValue(nameInSchema, "", { shouldDirty: true })
                                }}
                            >
                                <XIcon className="h-6 w-6 p-0 m-0" />
                            </Button>
                        ) : null}
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
