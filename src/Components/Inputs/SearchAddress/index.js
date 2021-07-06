import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity, View,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {SvgXml} from 'react-native-svg';
import svgfile from '../../../assets/svg/icsearch.svg';
import SearchAddressStyle from './_searchAddress';

const GOOGLE_PLACE_API_KEY = 'AIzaSyBYEOpkLH1fJSeFF6d83rJNfv9UgoJF1k4';

const {container, Page} = SearchAddressStyle;

const SearchAddress = ()=> {
  const {countryCode} = props;
  const queryCountry = `country:${countryCode}`;
  return (
    <View style={Page}>
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        placeholder="Search..."
        // placeholderTextColor="#003340"
        minLength={2}
        autoFocus
        returnKeyType="search"
        keyboardAppearance="light"
        listViewDisplayed="auto"
        fetchDetails
        renderDescription={(row) => row.description}
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

        getDefaultValue={() => ''}

        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: 'en',
          components: queryCountry,
          types: 'geocode',
        }}

        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#E5EAEB',
            marginHorizontal: 16,
            borderRadius: 4,
            borderWidth: 1,
            borderTopColor: '#E5EAEB',
            borderBottomColor: '#E5EAEB',
            borderTopWidth: 1,
            borderBottomWidth: 1,
          },
          textInput: {
            fontFamily: 'OpenSans-Regular',
            color: '#003340',
            fontSize: 16,
          },
          description: {
            fontSize: 16,
            fontFamily: 'OpenSans-Regular',
            color: '#003340',
            alignSelf: 'center',
            paddingHorizontal: 16,
          },
          row: {
            height: 'auto',
          },
        }}

        GooglePlacesDetailsQuery={{
          fields: 'name,geometry,formatted_address',
        }}

        debounce={200}
        renderRightButton={() => <TouchableOpacity style={{justifyContent: 'center'}}><SvgXml style={{marginRight: 10}} xml={svgfile} /></TouchableOpacity>}
      />
    </View>
  );
};
SearchAddress.defaultProps = {
  onValueChanged: () => { },
};

SearchAddress.propTypes = {
  onValueChanged: PropTypes.func,
  countryCode: PropTypes.string.isRequired, // ISO 3166-1 Alpha-2 compatible country code
};
export default SearchAddress;
