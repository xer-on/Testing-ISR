import React from 'react';

interface PostData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Post = async ({ params }: {params: { id: string }}): Promise<React.ReactElement> => {
    try {
        await delay(3000);
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = (await res.json()) as PostData;

        if (!data) {
            return <div>No data found</div>;
        }

        return (
            <div>
                <h1>{data.name}</h1>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Comment:</strong> {data.body}</p>
                <p><strong>Post ID:</strong> {data.postId}</p>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error: {(error as Error).message}</div>;
    }
};

export default Post;

