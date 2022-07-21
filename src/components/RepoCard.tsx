import React, {useState} from 'react';
import {IRepo} from "../models/models";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";

const RepoCard = ({repo} : {repo: IRepo}) => {

    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))


    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        addFavourite(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        removeFavourite(repo.html_url)
        setIsFav(false)
    }


    return (
        <div className={'border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'}>
            <a href={repo.html_url} target={"_blank"}>
                <h2 className={'font-bold text-lg'}>{repo.full_name}</h2>
                <p className={'text-sm'}>
                    Forks: <span className={'font-bold mr-2'}>{repo.forks}</span>
                    Watchers: <span className={'font-bold'}>{repo.watchers}</span>
                </p>
                <p className={'text-sm font-thin'}>
                    {repo?.description}
                </p>

                {isFav ?
                    <button
                        className={'py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'}
                        onClick={removeFromFavourite}
                    >
                        Remove
                    </button>
                    :
                    <button
                    className={'py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all'}
                    onClick={addToFavourite}
                    >
                    Add
                    </button>

                }
            </a>
        </div>
    );
};

export default RepoCard;