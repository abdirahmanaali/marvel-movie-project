import React, { Component } from 'react';
import './CharacterInfo.css';

class CharacterInfo extends Component {
    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                {data ? <div className="backdrop" onClick={this.props.close}></div> : ''}
                <div className={`character-info ${data ? 'character-info--visible' : ''}`}>
                    {data ?
                        <React.Fragment>
                            <div className="character-info__header">
                                <button className="character-info__button" onClick={this.props.close}>
                                    <i className="material-icons">clear</i>
                                </button>
                                <img className="character-info__image" src={`${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`} alt={data.name}/>
                                <h2 className="character-info__title">{data.name}</h2>
                            </div>
                            <div className="character-info__content">
                                {data.description}
                                <div className="character-info__link-content">
                                    {data.urls.map((el, index) => <a key={index} href={el.url} target="blank">{el.type}</a>)}
                                </div>
                            </div>
                        </React.Fragment> : ''
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default CharacterInfo;