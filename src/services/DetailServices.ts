import request from "."
import { FormatDetailData } from "./types/itemDetail"

const DetailServices = {
    getDetail: (id: string) => request<FormatDetailData>(`items/${id}`)
}

export default DetailServices
