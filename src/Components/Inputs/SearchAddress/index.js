import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity, View, Text, ScrollView,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {SvgXml} from 'react-native-svg';
// import svgfile from '../../../assets/svg/icsearch.svg';
import SearchAddressStyle from './_searchAddress';
import InputTitle from '../InputTitle';

// const GOOGLE_PLACE_API_KEY = 'AIzaSyBYEOpkLH1fJSeFF6d83rJNfv9UgoJF1k4';

const GOOGLE_PLACE_API_KEY = 'AIzaSyConH6CaPysaRd5GYFTN1N8Yy3b1RpxIbA';
const {container, main,
  textInputContainer,
  textInput,
  description,
  row} = SearchAddressStyle;

const SearchAddress = (props)=> {
  const {countryCode, title, style} = props;
  const queryCountry = `country:${countryCode}`;
  return (
    <View style={[main, style]}>
      <InputTitle title={title} />
      {/* <ScrollView> */}
      <GooglePlacesAutocomplete
        placeholder='Search destination'
        minLength={2}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: 'en',
        }}


      />
      {/* </ScrollView> */}
      {/* <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        placeholder="Search..."
        // placeholderTextColor="#003340"
        minLength={2}
        autoFocus
        returnKeyType="search"
        // returnKeyType={'default'}
        // keyboardAppearance="light"
        listViewDisplayed="auto"
        fetchDetails
        // renderDescription={(row) => row.description}
        onPress={(data, details = null) => {
          const detailData = {
            postalCode: '',
            lv1Long: '',
            lv1Short: '',
            countryLong: '',
            countryShort: '',
            localLong: '',
            localShort: '',
            address: data.structured_formatting.main_text,
          };
          details.address_components.forEach((element) => {
            if (element.types[0] === 'postal_code') {
              detailData.postalCode = element.long_name;
            }
            if (element.types[0] === 'administrative_area_level_1') {
              detailData.lv1Long = element.long_name;
              detailData.lv1Short = element.short_name;
            }
            if (element.types[0] === 'country') {
              detailData.countryLong = element.long_name;
              detailData.countryShort = element.short_name;
            }
            if (element.types[0] === 'locality') {
              detailData.localLong = element.long_name;
              detailData.localShort = element.short_name;
            }
          });

          props.onValueChanged(detailData);
        }}

        // getDefaultValue={() => ''}
        onFail={(error) => console.log(error)}
        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: 'en',
          components: queryCountry,
          types: 'geocode',
        }}

        styles={{
          textInputContainer,
          textInput,
          description,
          row,
        }}

        GooglePlacesDetailsQuery={{
          fields: 'name,geometry,formatted_address',
        }}

        debounce={200}
        renderRightButton={() => (
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Text>Text</Text>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
};
SearchAddress.defaultProps = {
  title: '',
  style: {},
  countryCode: '+1',
  onValueChanged: () => { },
};

SearchAddress.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape(),
  onValueChanged: PropTypes.func,
  countryCode: PropTypes.string, // ISO 3166-1 Alpha-2 compatible country code
};
export default SearchAddress;
