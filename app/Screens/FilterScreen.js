import React, { Component, PureComponent } from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Footer, Content, Left, Body, Right,Title, Text, Button, Icon, View,Thumbnail} from 'native-base';
import colors from '../theme/color'
import FilterButton from '../Components/FilterButton'
import { Slider } from 'react-native-elements'
import StarRating from 'react-native-star-rating';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    basicInfo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:10,
    },
    header: {
        backgroundColor: '#F8F7F7',
        height: 80,
        borderBottomColor: colors.lightergrey,
    },
    icon: {
        marginTop: 10,
        fontSize: 25
    },
    headerBody: {
        marginTop: 15,
    },
    imageWrapper: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 350,
        position: 'absolute',
        zIndex:-1
    },
    image: {
        flex: 2,
        width: null,
        height: null,
        opacity: 0.2
    },
    thumbnail: {
        marginTop: 10,
    },
    text: {
        backgroundColor:"rgba(0,0,0,0)",
        marginTop: 15,
        fontSize: 16,
        alignSelf: "center",
        color: '#959899'
    },
    filtertPreference: {
        marginTop: 20,
        padding: 40,
    },
    stars: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 180,
    },
    filterPreferenceText: {
        marginTop: 45,
        marginBottom: 10,
        marginLeft: 30,
        fontSize: 18,
        color: colors.mediumgrey,
    },
    buttonGroup: {
        flexDirection: 'row',
        marginLeft: 15
    },
});

export default class Filter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 1,
            filterValue: 2.5
        };
    }

    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    // this.props.navigation.state.params.updateFilter
    onStarRatingPress = (rating) => {
        this.setState({
            starCount: rating
        });
    }

    render(){
        return(
            <Container style={{backgroundColor: 'white'}}>
                 <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon style={styles.icon} name='angle-left' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>Filter</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.filterPreference}>
                        <View>
                            <Text style={styles.filterPreferenceText}>Price</Text>
                            <View style={styles.buttonGroup}>
                                <FilterButton starType='usd' starMax='4' starNumber='1' starColor={colors.priceyellow} emptyColor={colors.lightgrey} onPress={}/>
                                <FilterButton starType='usd' starMax='4' starNumber='2' starColor={colors.priceyellow} emptyColor={colors.lightgrey} />
                            </View>
                            <View style={styles.buttonGroup}>
                                <FilterButton starType='usd' starMax='4' starNumber='3' starColor={colors.priceyellow} emptyColor={colors.lightgrey} />
                                <FilterButton starType='usd' starMax='4' starNumber='4' starColor={colors.priceyellow} emptyColor={colors.lightgrey} />
                            </View>
                        </View>
                        <View style={styles.filterPreference}>
                            <Text style={styles.filterPreferenceText}>Rating no less than</Text>
                            <View style={styles.stars}>
                                <StarRating
                                    disabled={false}
                                    emptyStar={'star'}
                                    fullStar={'star'}
                                    halfStar={'star'}
                                    maxStars={5}
                                    starColor={'#FFE220'}
                                    emptyStarColor={'#C3BFBF'}
                                    starSize={26}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                        </View>
                        <View style={styles.filterPreference}>
                            <Text style={styles.filterPreferenceText}>Distance</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 4, marginLeft: 30, marginRight: 20}}>
                                    <Slider
                                        value={this.state.filterValue}
                                        onValueChange={(filterValue) => this.setState({filterValue})}
                                        maximumValue={10}
                                        step={0.1}
                                        minimumTrackTintColor={colors.darkgrey}
                                        maximumTrackTintColor={colors.mediumgrey}
                                        thumbStyle={{borderColor: 'black', borderWidth: 0.1, borderRadius: 30, backgroundColor: 'white', width: 30, height: 30}}
                                    />
                                </View>
                                <Text style={{flex: 1, marginTop: 10, fontSize: 14, color: colors.darkgrey}}>{Math.round( this.state.filterValue * 10 ) / 10} Mile </Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}