import "./App.css";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {

    return (

        <div className="app">

            <header className="app-header">

                <h1>Pipeline Builder</h1>

                <p>
                    Build AI workflows visually
                </p>

            </header>

            <main className="app-main">

                <aside className="sidebar">

                    <PipelineToolbar />

                </aside>

                <section className="canvas">

                    <PipelineUI />

                </section>

            </main>

            <footer className="app-footer">

                <SubmitButton />

            </footer>

        </div>

    );

}

export default App;