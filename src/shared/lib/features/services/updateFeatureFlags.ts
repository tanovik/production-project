import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type FeatureFlags } from '@/shared/types/featureFlags';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags} from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
void,
UpdateFeatureFlagOptions,
ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const allFeatures = {
        ...getAllFeatureFlags(),
        ...newFeatures,
    }

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: allFeatures
            }),
        );

        // features are not reactive, so we have to reload a page manually
        window.location.reload();
		
        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
