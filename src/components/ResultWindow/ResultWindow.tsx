import React from "react";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { connect } from "react-redux";
import { SystemState } from "../../redux/types";
import './result-window.scss';

const ResultWindow: React.FunctionComponent<SystemState> = () => {
    return (
        <section className='result_section'>
            <div className='result_container'>
                Ура!
            </div>
        </section>
    );
};

export default connect(mapStateToProps)(ResultWindow);
