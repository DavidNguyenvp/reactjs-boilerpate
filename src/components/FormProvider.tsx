import React, { useEffect } from 'react'
import { FieldValues, FormProvider as RHFProvider, SubmitHandler, useForm, UseFormProps } from 'react-hook-form'

interface IFormProviderProps<T extends FieldValues>
    extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    form: UseFormProps<T>
    onSubmit: SubmitHandler<T>
    children: React.ReactElement | React.ReactElement[]
    dataFill?: T
    getValue?: (data: T, isValid?: boolean) => void
}
export default function Form<T extends FieldValues>({
    children,
    onSubmit,
    form,
    dataFill,
    getValue,
    ...other
}: IFormProviderProps<T>): JSX.Element {
    const methods = useForm<T>(form)
    const watchAllField = methods.watch()
    const { isValid } = methods.formState
    useEffect(() => {
        methods.reset(dataFill)
    }, [methods, dataFill])

    useEffect(() => {
        getValue && getValue(watchAllField, isValid)
    }, [watchAllField, getValue, isValid])
    return (
        <RHFProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} {...other}>
                {React.Children.map(children, (child) => {
                    return child.props.name
                        ? React.createElement<T>(child.type, {
                              ...{
                                  key: child.props.name,
                                  ...methods.register,
                                  ...child.props,
                              },
                          })
                        : child
                })}
            </form>
        </RHFProvider>
    )
}
