import { API_URL } from "./constants";

async function fetchAPI (query: string, { variables }: { variables?: Record<string, any> } = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data;
}

export async function getCountries() {
    const data = await fetchAPI(`
    query getCountries {
        countries {
          name
          code
          emoji
        }
      }
      `)
    //   console.log(typeof data); // Log the type of the data variable
    return data.countries
}


// `
// query getCountries {
//     countries {
//       name
//       code
//       emoji
//     }
//   }
//   `