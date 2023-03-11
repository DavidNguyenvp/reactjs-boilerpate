import { localStorageGetItem } from '../utils/common'

export const keyLanguage = 'language'
const languageDefaultValue = localStorageGetItem(keyLanguage)

const languageDefaultProject = 'vi'
export const LANGUAGE = {
    languageDefault: !languageDefaultValue ? languageDefaultProject : languageDefaultValue,
    languageOption: [
        {
            name: 'language.vi',
            value: 'vi',
            icon: <div>VI</div>,
        },
        {
            name: 'language.en',
            value: 'en',
            icon: <div>EN</div>,
        },
    ],
}
