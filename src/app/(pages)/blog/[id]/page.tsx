import React, { Suspense } from 'react';
import Post from './post';

export const dynamicParams = true;
export const revalidate = 60;
export const generateStaticParams = async () => {
    const id = ['1', '2', '3'];
    return id.map((id) => {
        return {
            id,
        };
    });
};

// Simulate a delay and generate a random number
// const fetchRandomNumber = async (): Promise<number> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 100));
//         }, 40000); // 40 seconds
//     });
// };

const Page =  ({ params }: { params: { id: string } }) => {
    // const randomNumber = await fetchRandomNumber();

    return (
        <div>
            <div>ID: {params.id}</div>
            {/* <div>Random Number: {randomNumber}</div> */}
            <Suspense fallback={<div>Loading...</div>}>
            <Post params={params}/>
            </Suspense>
        </div>
    );
};

export default Page;
