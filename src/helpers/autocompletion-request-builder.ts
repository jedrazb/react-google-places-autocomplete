import { AutocompletionRequest } from '../types';

export default (
  autocompletionRequest: AutocompletionRequest,
  input: string,
  sessionToken?: google.maps.places.AutocompleteSessionToken,
): google.maps.places.AutocompletionRequest => {
  const { bounds, location, locationBias, ...rest } = autocompletionRequest;

  const res: google.maps.places.AutocompletionRequest= {
    input,
    ...rest,
  };

  if (sessionToken) {
    res.sessionToken = sessionToken;
  }

  if (bounds) {
    res.bounds = new google.maps.LatLngBounds(...bounds);
  }

  if (location) {
    res.location = new google.maps.LatLng(location);
  }

  if (locationBias) {
    res.locationBias = new google.maps.LatLng(locationBias);
  }

  return res;
};
