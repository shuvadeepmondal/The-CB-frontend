import React from 'react';
import Particlebg from '../Particlebg';

type IconProps = React.SVGProps<SVGSVGElement>

const CalendarIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    );
};

const TrophyIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    );
};

const UsersIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
};
const About: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <Particlebg />
            <section id="about" className="py-12 md:py-24 relative z-30 mt-20">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Who are we?
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cum optio ipsam nulla nobis. Consequatur, quibusdam ut. Explicabo voluptatem repellendus, laborum ea tenetur quae eligendi sequi cumque perspiciatis rerum magnam.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <UsersIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">7+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Core Members<span className="text-blue-600 text-sm"> (till 2024)</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <UsersIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">25+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Semi Core members<span className="text-blue-600 text-sm"> (2024)</span>
                                    </div>
                                </div>                                
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <CalendarIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">20+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Events & Session<span className="text-blue-600 text-sm"> (per year)</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <UsersIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">125+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Members<span className="text-blue-600 text-sm"> (2024)</span>
                                    </div>
                                </div>  
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <TrophyIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">10+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Achievement<span className="text-blue-600 text-sm"> (till 2024)</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-2 rounded-xl bg-background p-4 shadow-2xl">
                                    <UsersIcon className="h-8 w-8 text-primary" />
                                    <div className="text-2xl font-bold">450+</div>
                                    <div className="text-lg font-semibold text-muted-foreground">
                                        Alumni<span className="text-blue-600 text-sm"> (till 2024)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;