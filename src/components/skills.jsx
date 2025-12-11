import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeXml, ArrowDown, Trophy, Languages, Infinity, Gamepad2 } from 'lucide-react';

export default function Skills(){

    return(
            <Card className="bg-black md:text-lg">
                <CardHeader>
                    <CardTitle className="text-[2em]">Skills & Interests</CardTitle>
                    <CardDescription>Here is a list of some my current skills.</CardDescription>
                    <hr></hr>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="code" className="flex items-center">
                        <TabsList className="bg-transparent border-t border-b border-gray-700 text-red">
                            <TabsTrigger value="code" className="tab-trigger">Code</TabsTrigger>
                            <TabsTrigger value="other" className="tab-trigger">Other</TabsTrigger>
                        </TabsList>

                        <TabsContent value="code" className="grid grid-rows-2">
                                <div className="flex order-1 justify-center mx-5 m-2">
                                    <div className="flex mx-2"><CodeXml className="icon-size"/>React</div>
                                    <div className="flex mx-2"><CodeXml className="icon-size"/>Tailwind</div>
                                    <div className="flex mx-2"><CodeXml className="icon-size"/>Pygame</div>
                                </div>

                                <div className="flex order-2 justify-center">
                                    <div className="flex mx-2"><CodeXml className="icon-size"/>Python</div>
                                    <div className="flex mx-2"><CodeXml className="icon-size"/>C</div>
                                </div>
                        </TabsContent>

                        <TabsContent value="other" className="grid grid-cols-2">
                            <div className="flex px-10 py-2"><Trophy className="icon-size"/>Soccer</div>
                            <div className="flex px-10 py-2"><Infinity className="icon-size"/>Math</div>
                            <div className="flex px-10 py-2"><Gamepad2 className="icon-size"/>Gaming</div>
                            <div className="flex px-10 py-2"><Languages className="icon-size"/>Spanish</div>
                           
                        </TabsContent>
                    </Tabs>

                </CardContent>
                <CardFooter>
                    <p className="pr-3.5">For more information, scroll down</p>
                    <ArrowDown className="pb-0.5 h-5 w-5"/>
                </CardFooter>
            </Card>
       
    )
}