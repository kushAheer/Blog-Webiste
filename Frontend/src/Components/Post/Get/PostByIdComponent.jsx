import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import classes from './PostById.module.css';
import CardUi from "../../UI/Card/CardUi";
import ButtonUi from "../../UI/Button/Button";
import Like from "../../UI/Like/Like";
function PostByIdComponent(props) {
    const param = useParams();
    // const data  = useLoaderData();
    return (
        <>
            <div className={`${classes.containerPage} pt-5`}>
                <div className={`row ${classes.addWidth}`} >
                    <div className="col-md-12">
                        <h1>Title</h1>
                        <div className={`${classes.border} `}>
                            
                            <img src="https://via.placeholder.com/50" alt="..." className={` img-fluid rounded-5`} />
                            <h5 className="p-1">Name</h5>
                                
                            
                            <Like/>
                            
                        </div>
                        <div className="col-md-12 pt-5">
                            <img src="https://via.placeholder.com/600" alt="..." className={`img-fluid rounded-5`} />
                        </div>

                        <div className="col-md-12 pt-5">
                            <p>The title is not clickbait, the message is abrupt “Stop Using localStorage!” there is no ambiguity here and we are not holding hands and singing Kumbaya to soften the blow.
                                Problems with localStorage?
                                localStorage came about around 2009 as a 5MB string based storage. Let’s cut to the chase with some bullet points since our attention spans are in disarray these days:
                                A collection of Strings: It can only store strings. If you want to store or retrieve you have to serialize and deserialize. If you forget to you may be exposed to quirks that have been responsible for all sorts of broken websites. E.g. When you store “true” or “false” there is also a potential `null`, `undefined` or “” to look out for depending on your setup.
                                No Structured Data: JavaScript has a thing called The structured clone algorithm. You really need to know this is a thing. Modern APIs and updated APIs such as postMessage, WebWorkers, IndexedDB, Caches API, BroadcastChannel, Channel Messaging API, MessagePort and the History API all use structured data. It solves the problem with serializing and deserializing JSON within an app. localStorage had not been updated with this feature and there are no discussions around it happening in the future.
                                Common security compromises: To clarify, you should never store sensitive data in any persistent storage that wasn’t designed specifically for it. Developers still commonly store Session IDs, JWTs, credit card details and API keys in localStorage. It’s a very common security hack because it is as easy as window.localStorage
                                Performance: Historically localStorage had it’s slow moments, though there has been some optimisations over time that brings it up to a resonable performance. Despite this, it’s still not desirable for concurrent applications with a need for frequent transactions. If you benchmark on let’s say the latest MacBook without throttling performance you will may not understand the cost implications on low powered devices.
                                Size Limitation: localStorage has a 5MB cap which is subject to eviction. This is a very small amount for modern applications. It’s difficult to store encoded media with such a small amount. And it’s not set in stone, just like all persistent storage on the web localStorage can and will be evicted by the browser at some point. You are expected to manage that part of the data life-cycle, despite there being no reminder to.
                                No Web Worker Access: I hope you’re understanding that localStorage is not an API for the future or to harness concurrency, which strives on low powered devices.
                                No Atomicity or Isolation: localStorage does not guarantee atomicity across multiple operations. There is no locking mechanism to ensure what gets written or to prevent information being written over.
                                No Data Separation or Granular Origin Scoping: localStorage is just an object of strings, there is no data separation, user data is mixed with app data. Although it uses the same-origin policy there is no way to restrict data by a particular doman or subdomain that has access. This can create duplicated work when meeting GDPR standards across multiple domains.
                                No Grouped Transactions: localStorage has no transactions by the database definiton, but it also has no way to group operations. Each operation is synchronous, non-isolated, with no locking.</p>
                        </div>
                    </div>
                    <div className={`${classes.categoryBox}`}>
                        <a href="#" class="badge badge-primary">Primary</a>
                        <a href="#" class="badge badge-secondary">Secondary</a>
                        <a href="#" class="badge badge-success">Success</a>
                        <a href="#" class="badge badge-danger">Danger</a>
                        <a href="#" class="badge badge-warning">Warning</a>
                        <a href="#" class="badge badge-info">Info</a>
                        <a href="#" class="badge badge-light">Light</a>
                        <a href="#" class="badge badge-dark">Dark</a>
                    </div>
                    <div className="col-md-12 pt-5">
                        <h1>Comments</h1>
                        <div className="row">
                            <div className="col-md-10">

                                <input type="text" className="form-control" placeholder="Enter your comment" />
                            </div>
                            <div className="col-md-2">
                                
                            <ButtonUi>Send</ButtonUi>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default PostByIdComponent;