import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { LucideIcon } from 'lucide-react';

interface ServicesCardProps {
	title?: string;
	description?: string;
	content?: string;
	footer?: string;
}

export const ServicesCard = ({
	title,
	description,
	content,
	footer,
}: ServicesCardProps) => {
	return (
		<Card className="p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-300 cursor-pointer">
			<CardHeader>
				<CardTitle className='mb-2'>{ title }</CardTitle>
				<CardDescription>{ description }</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					{ content }
				</p>
			</CardContent>
			<CardFooter>
				<p>{ footer }</p>
			</CardFooter>
		</Card>
	)
}

interface ServicesCardIconProps {
	title?: string;
	description?: string;
	content?: string;
	footer?: string;
	Icon: LucideIcon;
}
export const ServicesCardWithIcon = ({
	title,
	description,
	content,
	footer,
	Icon,
}: ServicesCardIconProps) => {
	return (
		<Card className='p-4'>
			<CardHeader>
				<Icon className='mb-2' />
				<CardTitle className='mb-2'>{ title }</CardTitle>
				<CardDescription className='pt-1'>{ description }</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					{ content }
				</p>
			</CardContent>
			<CardFooter>
				<p>{ footer }</p>
			</CardFooter>
		</Card>
	)
}