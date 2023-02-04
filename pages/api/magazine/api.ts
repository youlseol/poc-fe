import { type Magazine, type MagazineDetail } from './model';

export const getMagazineList = async (): Promise<Magazine[]> => {
    const response = await fetch(process.env.REACT_API_URL + '/v1/feed/magazines?sort=date', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'x-api-key': process.env.X_API_KEY ?? '',
            'x-correlation-id': '12345'
        }
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    // Recommendation: handle errors
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const json = await response.json();

    return (json?.successOrNot === 'Y' ? json?.data?.list : null) as Magazine[];
};

export const getMagazineDetail = async (id: string): Promise<MagazineDetail> => {
    const response = await fetch(process.env.REACT_API_URL + '/v1/feed/magazine/' + id, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'x-api-key': process.env.X_API_KEY ?? '',
            'x-correlation-id': '12345'
        }
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    // Recommendation: handle errors
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const json = await response.json();

    console.info('response >> ', json?.data);
    return (json?.successOrNot === 'Y' ? json?.data : null) as MagazineDetail;
};
