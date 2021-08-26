import React from 'react'

const Audio = ({meanings, language, word}) => {
    return (
        <div>
            { meanings[0] && word && language==='en' && (
                <audio controls src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                >
                    Your browser does not support audio
                </audio>
            )}
        </div>
    )
}

export default Audio
