import request from "."
import { FormatSearchData } from "./types/itemSearch"

const SearchServices = {
    getItems: (param: string) => request<FormatSearchData>(`items?q=${param}`)
}

export default SearchServices
