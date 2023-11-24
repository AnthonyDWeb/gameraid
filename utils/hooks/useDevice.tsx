import { useState, useEffect } from "react";
import { DeviceType, getDeviceTypeAsync } from "expo-device";

const deviceTypeMap = {
	[DeviceType.UNKNOWN]: "unknown",
	[DeviceType.PHONE]: "phone",
	[DeviceType.TABLET]: "tablet",
	[DeviceType.DESKTOP]: "desktop",
	[DeviceType.TV]: "tv",
};
export const getDevice = async () => deviceTypeMap[await getDeviceTypeAsync()];

export const useDevice = () => {
	const [nativeDevice, setNativeDevice] = useState<string | undefined>();
	const checkDevice = async () => setNativeDevice(await getDevice());
	useEffect(() => {
		!nativeDevice && checkDevice();
	});
	const deviceValue = {
		nativeDevice,
	};
	return deviceValue;
};
