/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

import {Component} from "react";
import {Link} from "react-router";
import ListOfLists from "../component/ListOfLists";
import SelectUserVersions from "../component/SelectUserVersions";

export default class App extends Component {

    constructor() {
        super();
        this.state = {};
        this.setOpenmrsCoreVersion = this.setOpenmrsCoreVersion.bind(this);
    }

    setOpenmrsCoreVersion(userOpenmrsCoreVersion) {
            this.setState({
                openmrsCoreVersion: userOpenmrsCoreVersion
            });
    }

    render() {
        let selectedCoreVersion = this.state.openmrsCoreVersion ? this.state.openmrsCoreVersion : null ;
        let childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, { selectedVersion: selectedCoreVersion}));
        return (
                <div className="container-fluid">
                    <header className="clearfix row vertical-align-center">
                        <h1 className="col-sm-4">
                            <a href="#/">
                                <img className="logo logo1" src="/images/logo.png" alt="OpenMRS Add-Ons Logo"/>
                            </a>
                        </h1>
                        <div className="col-sm-5">
                            <ListOfLists/>
                        </div>
                        <h5 className="col-sm-3">
                            <SelectUserVersions value={this.state.openmrsCoreVersion} updateValue={this.setOpenmrsCoreVersion}/>
                            <br/>
                        </h5>
                    </header>
                    <div className="pull-right">
                        <Link to={`/about`} activeClassName="hidden">About Add Ons</Link>
                    </div>
                    {childrenWithProps}
                </div>
        )
    }

}