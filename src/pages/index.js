const React = require('react');
const fs = require('fs-extra');
const path = require('path');

const readMetadata = require('../../server/readMetadata.js');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const join = path.join;
const CWD = process.cwd();
const siteConfig = require(CWD + '/siteConfig.js');

const file = join(CWD, '..', 'README.md');
let meta = readMetadata.extractMetadata(fs.readFileSync(file, 'utf8'))

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <div className="container mainContainer">
          <div className="wrapper">
            <div className="post">
              <header className="postHeader">
                <h1>{meta.metadata.title}</h1>
              </header>
              <article>
                <MarkdownBlock>{meta.rawContent}</MarkdownBlock>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;