import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading,
  // Task 18: Import the `selectSuggestion()` selector from the suggestion slice
  selectSuggestion,
} from './suggestion.slice';
import './suggestion.css';

export default function Suggestion() {
  // Task 19: Call useSelector() with the selectSuggestion() selector
  const { imageUrl, caption } = useSelector(selectSuggestion);
  // The component needs to access the `imageUrl` and `caption` properties of the suggestion object.
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('the data in useeffect:', {imageUrl, caption});
   //console.log('Redux state:', useSelector((state) => state));
    async function loadSuggestion() {
      // Task 20: Dispatch the fetchSuggestion() action creator
      dispatch(fetchSuggestion());
      console.log('the data in useeffect:', fetchSuggestion());
    }
    loadSuggestion();
    console.log('the data in after loadSuggestion:', {imageUrl, caption});
  }, [dispatch]);

 let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  }  else if (error) {
    render = <h3>Sorry, we're having trouble loading the suggestion.</h3>;
  } else if (!imageUrl || !caption) {
    render = <h3>Data not available yet...</h3>;
  }
  else {
    // Task 21: Enable the two JSX lines below needed to display the suggestion on the page
    render = (
      <>
        <img alt={caption} src={imageUrl} />
        <p>{caption}</p>
      </>
    );
  }

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
