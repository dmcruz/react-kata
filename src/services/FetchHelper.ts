import { SwapiUrls } from "./SwapiUrls";

export const FetchHelper = {
  async getAllPeople(): Promise<[] | any> {
    let people: any[] = [];
    await fetch(SwapiUrls.PEOPLE)
      .then((res: Response) => res.json())
      .then((data: any) => {
        // first fetch is to get the total number of records and initialize the people array with first page
        people = data.results;
        return data.count;
      })
      .then((count: number) => {
        // subsequently, we build an array of fetch function calls to all the remaining page URLs
        const totalPages = Math.ceil(count / 10);
        const fetchPages = [];
        for (let i = 2; i <= totalPages; i++) {
          fetchPages.push(fetch(`${SwapiUrls.PEOPLE}?page=${i}`));
        }
        // Promise all takes a list of promises as an input and resolves them into a single array of results
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
        return Promise.all(fetchPages);
      })
      .then((results: any) => {
        console.log(typeof results);
        return Promise.all(results.map((r: any) => r.json()));
      })
      .then((data: any) => {
        // this section appends all the response results into the existing people array
        // read more about Array.prototype.reduce()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        people = data.reduce(
          (accumulator: any, item: any) => [...accumulator, ...item.results],
          people
        );
      });
    return people;
  },
};
