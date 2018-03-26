import React, {Component} from 'react';
import './ItemDisplay.css';
import ItemGrid from '../ItemGrid/ItemGrid';
import ItemList from '../ItemList/ItemList';

class ItemDisplay extends Component {
    changeListing(e) {
        let target = e.target;
        console.log(target);
    }

    render() {
        const buttonGroup = (
            <div className="col-xs-12 buttonGroup">
                <button className="btn btn-white glyphicon glyphicon-th"
                    onClick={this.changeListing} listing="grid"></button>

                <button className="btn btn-white glyphicon glyphicon-th-list"
                    onClick={this.changeListing} listing="list"></button>
                <button className="btn btn-white glyphicon glyphicon-th-large"
                    onClick={this.changeListing} listing="carrousel"></button>
            </div>
        );

        return(
            <div>
                {buttonGroup}
            </div>
        );
    }
}

export default ItemDisplay;
