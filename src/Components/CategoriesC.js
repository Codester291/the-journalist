import React from 'react';
import '../styles/catstyle.css';
import MaterialIcon, { colorPalette } from 'material-icons-react';
class CategoriesC extends React.Component {

    render() {
        return <div className="masterDiv">
            <br />
            <div className="cats">
                <div className="nth-cats">
                    <div className="small-circ">
                        <MaterialIcon icon="add_to_photos" color={colorPalette.grey._200} size={50} />
                    </div>
                    <h1 className="catHeaders">Fantasy</h1>
                </div>
                <div className="nth-cats">
                    <div className="small-circ">
                        <MaterialIcon icon="description" color={colorPalette.grey._200} size={50} />
                    </div>
                    <h1 className="catHeaders">Philosophy</h1>
                </div>
                <div className="nth-cats">
                    <div className="small-circ">
                        <MaterialIcon icon="face" color={colorPalette.grey._200} size={50} />
                    </div>
                    <h1 className="catHeaders">Urban Stories</h1>
                </div>
                <div className="nth-cats">
                    <div className="small-circ">
                        <MaterialIcon icon="favorite" color={colorPalette.grey._200} size={50} />
                    </div>
                    <h1 className="catHeaders">Romance</h1>
                </div>
                <div className="nth-cats">
                    <div className="small-circ">
                        <MaterialIcon icon="query_builder" color={colorPalette.grey._200} size={50} />
                    </div>
                    <h1 className="catHeaders">Midieval</h1>
                </div>
            </div>
        </div>
    }
}

export default CategoriesC;