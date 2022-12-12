import React, { Component, Fragment } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Media from 'react-media';
import Navbar from "../components/Navbar";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {
	state = { numPages: null, pageNumber: 1, width: 600};

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
	setWidthSmall = () =>
		this.setState((state) => ({ width: 200 }));
	setWidthLarge = () =>
		this.setState((state) => ({ width: 600 }));

	render() {
		const { pageNumber, numPages, width } = this.state;

		return (
			<div >
				<Media queries={{
					small: "(max-width: 599px)",
					large: "(min-width: 600px)"
				}}>
					{matches => (
						<Fragment>
							{matches.small && this.setWidthLarge}
							{matches.large && this.setWidthSmall}
						</Fragment>
					)}
				</Media>
				<Navbar />
				<div className=" flex justify-center">
				<nav className="text-center">
					<button onClick={this.goToPrevPage}>Prev</button>
					<button onClick={this.goToNextPage}>Next</button>
				</nav>
				<div>
					<Document
							file={process.env.PUBLIC_URL + "/ResumeDec2022.pdf"}
							onLoadSuccess={this.onDocumentLoadSuccess}
							wi
					>
							<Page wrap={false} height="300" width="200"  pageNumber={pageNumber} />
					</Document>
				</div>
				<p>
					Page {pageNumber} of {numPages}
					</p>
				</div>
			</div>
		);
	}
}