import { getCountries } from "../lib/api";
// import { GetStaticProps } from "next";

interface Country {
    name: string;
    code: string;
    emoji: string;
}

export default async function ListOfCountries() {
    const countries = await getCountries() || [];
    
    // console.log(countries); // Log the type of the data variable
    return (
        <ul>
            {countries.map((country: Country) => (
                <li key={country.code}>
                    
        <i className={`em-svg em-flag-${country.code.toLowerCase()}`} aria-role="presentation" aria-label={country.name}></i>
                     {country.name} 
                </li>
            ))}
        </ul>
    );
}


// export const getStaticProps = async () => {
//     const countries = await getCountries();
//     return {
//         props: {
//             countries: countries ? countries : []  // Ensure countries is an array even if it's null or undefined
//         }
//     };
//   };
