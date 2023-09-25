import React from "react";
import { Component } from "./Component";
import { Component4 } from "./Component4";
import { DivWrapper } from "./DivWrapper";
import { MainHeaderLogin } from "./MainHeaderLogin";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { PropertyEllipseWrapper } from "./PropertyEllipseWrapper";
import "./resources/style.css";

export const Site = () => {
  return (
    <div className="site">
      <div className="div-2">
        <div className="overlap">
          <div className="about">
            <div className="more-info-text">
              <div className="join-us-header">
                <div className="text-wrapper-2">join us community</div>
              </div>
              <div className="join-us-info">
                <div className="overlap-group">
                  <div className="join-us-header-info">
                    <div className="text-wrapper-3">here you can:</div>
                  </div>
                  <div className="join-us-text">
                    <div className="go-text">
                      <div className="go-text-dot">
                        <Component className="component-1" property1="ellipse-1" />
                      </div>
                      <div className="go-text-text">
                        <div className="text-wrapper-4">research articles and developments</div>
                      </div>
                    </div>
                    <div className="go-text-2">
                      <div className="component-wrapper">
                        <Component className="component-1" property1="ellipse-1" />
                      </div>
                      <div className="go-text-text-2">
                        <div className="text-wrapper-5">educational articles and materials</div>
                      </div>
                    </div>
                    <div className="go-text-3">
                      <div className="component-1-wrapper">
                        <Component className="component-1" property1="ellipse-1" />
                      </div>
                      <div className="entertainment-wrapper">
                        <div className="text-wrapper-4"> entertainment articles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="text-wrapper-6">.instagram</div>
            <div className="text-wrapper-7">.vk</div>
            <div className="text-wrapper-8">.github</div>
          </footer>
        </div>
        <div className="more-info">
          <div className="more-info-text-2">
            <div className="more-info-article-wrapper">
              <div className="more-info-article">
                <div className="more-info-article-2">
                  <div className="overlap-group-2">
                    <div className="flexcontainer-wrapper">
                      <div className="flexcontainer">
                        <p className="text">
                          <span className="span">
                            Introduction
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-9">
                            In the rapidly evolving landscape of Information Technology, one of the most intriguing
                            frontiers is Quantum Computing. Unlike classical computers that rely on binary bits, quantum
                            computers harness the power of quantum bits or qubits. This paradigm shift promises to
                            revolutionize computations, potentially solving complex problems that were previously deemed
                            insurmountable. This article delves into the potential applications, challenges, and the
                            future outlook of quantum computing.
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="span">
                            Applications of Quantum Computing
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-10">
                            1. Optimization Problems
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-11">
                            Quantum computing excels in solving optimization problems that arise in various fields, such
                            as logistics, finance, and materials science. For instance, it can optimize supply chain
                            routes, perform portfolio optimization, and facilitate the discovery of new materials with
                            specific properties.
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-10">
                            2. Cryptography and Security
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-11">
                            Quantum computing poses both a threat and a solution to modern cryptography. While it can
                            break current encryption algorithms, it also opens the door to quantum-safe encryption
                            methods like lattice-based cryptography and quantum key distribution (QKD), ensuring secure
                            communications in the quantum era.
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-10">
                            3. Drug Discovery and Molecular Modeling
                            <br />
                          </span>
                        </p>
                        <p className="text">
                          <span className="text-wrapper-11">
                            Quantum computers have the potential to dramatically accelerate the drug discovery process.
                            By simulating the behavior of molecules at the quantum level, researchers can identify
                            promising drug candidates and understand their interactions with biological systems, leading
                            to faster and more effective drug development.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="the-future-of-wrapper">
                      <p className="the-future-of">
                        the future of quantum computing: unlocking a new era in information technology
                      </p>
                    </div>
                  </div>
                  <div className="more-info-author">
                    <div className="text-wrapper-12">.john_doe</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-info-text-3">
              <div className="text-wrapper-13">articles and nothing superfluous</div>
            </div>
            <Component className="component-instance" property1="ellipse-1" />
            <PropertyEllipseWrapper className="component-2" property1="ellipse-1" />
            <DivWrapper className="component-3" property1="ellipse-1" />
            <Component4 className="component-4-instance" property1="ellipse-1" />
          </div>
        </div>
        <div className="main">
          <div className="main-info">
            <div className="main-info-text">
              <p className="p">your hub for tech and scientific articles</p>
              <div className="main-info-text-wrapper">
                <div className="main-info-text-2">
                  <div className="text-wrapper-14">socius</div>
                  <div className="socius-dot">
                    <PropertyDefaultWrapper className="design-component-instance-node" property1="default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-header">
            <div className="main-header-login-wrapper">
              <MainHeaderLogin className="design-component-instance-node" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};