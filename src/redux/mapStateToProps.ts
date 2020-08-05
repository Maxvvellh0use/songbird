import {NextCategoryBird, SystemState} from "./types";

export const mapStateToProps = (state: SystemState) => ({
    currentBird: {
        audio: state.currentBird.audio,
        description: state.currentBird.description,
        id: state.currentBird.id,
        image: state.currentBird.image,
        name: state.currentBird.name,
        species: state.currentBird.species,
        otherBirdsInCategory: state.currentBird.otherBirdsInCategory,
    },
    selectBird: {
        audio: state.selectBird.audio,
        description: state.selectBird.description,
        id: state.selectBird.id,
        image: state.selectBird.image,
        name: state.selectBird.name,
        species: state.selectBird.species,
        activeListClass: state.selectBird.activeListClass,
    },
    categoryBird: {
        categoryIndex: state.categoryBird.categoryIndex,
        score: state.categoryBird.score,
    },
    audioBird: {
        selectAudio: state.audioBird.selectAudio,
        currentAudio: state.audioBird.currentAudio,
    }
})
