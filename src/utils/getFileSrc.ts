import { noImage } from 'constants/mapConfig'

export const getFileSrc = (id: string): string => {
    const src = id ? `${process.env.REACT_APP_BACKEND_BASE_URL}file/` + id : noImage
    return src
}
