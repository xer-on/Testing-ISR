import React from 'react';

export const revalidate = 60000;
export const dynamicParams = true;

/**
 * @param {Response} res - The response from the API
 * @returns {Promise<string>} - The plain text response
 */
export async function generateStaticParams(): Promise<string> {
    const res = await fetch('https://animax.free.beeceptor.com/');
    const data = await res.text();
    return data;

}

const page = async ({ data }: { data: Promise<string> }) => {
    const dataText = await data;
    return (
      <div>
        <pre>{dataText}</pre>
        <h1>{dataText}</h1>
      </div>
    );
  };

export default page;

