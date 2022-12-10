import * as React from 'react'
import { Food } from '../util/interface'

export interface UserContextInterface {
    login: boolean
    setLogin: (a: boolean) => void
    admin: boolean
    setAdmin: (a: boolean) => void
    name: string | null
    setName: (a: string | null) => void
    createPlanList: Food[]
    myPlan: Food[]
    myFavorite: Food[]
    handleAddToCreatePlan: (food: Food) => void
    handleRemoveFromCreatePlan: (id: number | undefined) => void
    handleAddToFavorite: (food: Food) => void
    handleRemoveFromFavorite: (id: number) => void
    handleCreatePlan: (list: Food[]) => boolean
}

const UserContext = React.createContext<UserContextInterface>({
    login: false,
    setLogin: () => { },
    setAdmin: () => { },
    admin: false,
    name: null,
    setName: () => { },
    createPlanList: [],
    myFavorite: [],
    myPlan: [],
    handleAddToCreatePlan: () => { },
    handleRemoveFromCreatePlan: () => { },
    handleAddToFavorite: () => { },
    handleRemoveFromFavorite: () => { },
    handleCreatePlan: () => true,
})

export function UserProvider({ children }: any) {
    const [login, setLogin] = React.useState<boolean>(false)
    const [admin, setAdmin] = React.useState<boolean>(false)
    const [name, setName] = React.useState<string | null>(null)
    const [createPlanList, setCreatePlanList] = React.useState<Food[]>([])
    const [myFavorite, setMyFavorite] = React.useState<Food[]>([])
    const [myPlan, setMyPlan] = React.useState<Food[]>([])

    // get user favorite dishes
    React.useEffect(() => { }, [])

    const handleAddToCreatePlan = (food: Food) => {
        if (food) setCreatePlanList([...createPlanList, food])
    }

    const handleRemoveFromCreatePlan = (id: number | undefined) => {
        if (id) {
            const arr = createPlanList.filter((food) => food.id !== id)
            setCreatePlanList(arr)
        } else setCreatePlanList([])
    }

    const handleAddToFavorite = (food: Food) => {
        if (food) setMyFavorite([...myFavorite, food])
    }

    const handleRemoveFromFavorite = (id: number) => {
        if (id) {
            const arr = myFavorite.filter((food) => food.id !== id)
            setMyFavorite(arr)
        }
    }

    const handleCreatePlan = (list: Food[]) => {
        if (list) {
            setMyPlan(list)
            return true
        }
        return false
    }

    return (
        <UserContext.Provider
            value={{
                login,
                admin,
                name,
                setName,
                setLogin,
                setAdmin,
                createPlanList,
                myFavorite,
                myPlan,
                handleAddToCreatePlan,
                handleRemoveFromCreatePlan,
                handleAddToFavorite,
                handleRemoveFromFavorite,
                handleCreatePlan,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
