"use client"

import * as z from 'zod';
import { formSchema } from './constants';
import { 
    Form, 
    FormControl, 
    FormField,
    FormItem 
} from '@/components/ui/form';

import axios from 'axios';
import { Input } from '@/components/ui/input';
import { MessagesSquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import  HeadingComponent  from '@/components/ui/heading';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ConversationPage = () => {

    const router = useRouter();
    const [messages, setMessages] = useState([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage = {
                role: 'user',
                content: values.prompt
            };
            const newMessages = [...messages, userMessage];

            const response = await  axios.post("/api/conversation", {
                messages: newMessages,
            })

            setMessages((current) => [])

            form.reset();

        } catch (error: any) {
            //Todo: pro plan modal
            console.log(error);
        } finally {
            router.refresh();
        }
    };


  return (
    <>
    <HeadingComponent
    title="Conversation"
    description="You're welcome to chat with our Intelligent Conversational Assistant!"
    icon={MessagesSquareIcon}
    iconColor="text-violet-500"
    bgColor="bg-violet-500/10"
    />

    <div className='px-4 lg:px-8 '>
        <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='rounded-lg border w-full p-2 px-2 md:px-6 focus-within:shadow-md
             grid grid-cols-12 gap-2'
            >
                <FormField
                name="prompt"
                render={({field}) => (
                    <FormItem className='col-span-12 lg:col-span-10'>
                        <FormControl className='m-0 p-0'>
                            <Input
                            className='
                            border-0 
                            outline-none focus-visible:ring-0
                            focus-visible:ring-transparent '
                            disabled={isLoading}
                            placeholder='Send a Message'
                            {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}/>
                <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Send
                </Button>
            </form>
        </Form>        
    </div>
    <div className='space-y-4 mt-4 '>
        <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message) => (
                <div key={message.content}>
                    {message.content}
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default ConversationPage