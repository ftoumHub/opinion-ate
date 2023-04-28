import {useEffect} from 'react';

/**
 * This is the typical useEffect pattern to run an effect only once. The dependency array
 * we pass to useEffect contains loadRestaurants, so the effect will run once each time
 * loadRestaurants changes. In our test (and in our real application) loadRestaurants will
 * never change, so the effect just runs once when the component first renders.
 */
export default function RestaurantList({loadRestaurants}) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  
  return <div>RestaurantList</div>;
}
