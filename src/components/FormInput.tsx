import { FormControl, FormHelperText, FormLabel, Text } from "@chakra-ui/react"
import React from "react"

interface FormInputProps {
	labelText: string
	labelId: string
	errorMessage?: string
	required?: boolean
	gridColumn?: GridColumn | string
	children: React.ReactElement<React.InputHTMLAttributes<HTMLElement>>
}

export const FormInput: React.FC<FormInputProps> = p => {
	const { labelText, labelId, errorMessage, children, required, gridColumn = "1/-1", ...input } = p

	return (
		<FormControl gridColumn={gridColumn}>
			<FormLabel id={labelId}>
				{required && (
					<Text as="span" color="required" display="inline">
						*&nbsp;
					</Text>
				)}
				{labelText}
			</FormLabel>
			{React.cloneElement(children, {
				required,
				"aria-labelledby": `${labelId} ${children.props["aria-labelledby"] ?? ""}`.trim(),
				...input
			})}
			<FormHelperText color="error" fontSize="error" mt="4px" overflowWrap="normal" role="alert" w="full">
				{errorMessage}
			</FormHelperText>
		</FormControl>
	)
}
