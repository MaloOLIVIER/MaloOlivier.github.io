import React from 'react';
import './Publications.css';

interface Paper {
    title: string;
    abstract: string;
    author: string;
    publicationDate: string;
    tags: string[];
}

function PaperList({ papers }: { papers: Paper[] }) {
    return (
        <div className="paper-list">
            {papers.map((paper, index) => (
                <div className="paper" key={index}>
                    <h2>{paper.title}</h2>
                    <p>{paper.abstract}</p>
                    <p>Author: {paper.author}</p>
                    <p>Publication Date: {paper.publicationDate}</p>
                    <p>Tags: {paper.tags.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

const Publications: React.FC = () => {
    return (
        <div className="publications">
            <h1>Publications</h1>
            <p>I am currently working on my research and will be adding my publications here soon.</p>

            <PaperList
                papers={[
                    {
                        title: 'Paper 1',
                        abstract: 'Abstract for paper 1',
                        author: 'John Doe',
                        publicationDate: '2021-01-01',
                        tags: ['tag1', 'tag2'],
                    },
                    {
                        title: 'My other paper',
                        abstract: 'Abstract for paper 2',
                        author: 'Jane Doe',
                        publicationDate: '2021-02-01',
                        tags: ['tag2', 'tag3'],
                    },
                ]} />

        </div>);
};

export default Publications;