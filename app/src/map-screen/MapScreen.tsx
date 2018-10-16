import { Location, MapView, Permissions } from "expo";
import * as React from "react";
import { createRef } from "react";
export interface Props {
    navigation: any;
}
class MapScreen extends React.Component<Props> {
    private mapRef = createRef<MapView>();

    public componentDidMount() {
        this.getLocationAsync();
    }

    public render() {
        return (
            <MapView
                ref={this.mapRef}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.9805324,
                    longitude: -1.1271753,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }

    private async getLocationAsync() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === "granted") {
            const userLocation = await Location.getCurrentPositionAsync({});
            this.mapRef.current.animateToRegion({
                ...userLocation.coords,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }
}

export default MapScreen;
