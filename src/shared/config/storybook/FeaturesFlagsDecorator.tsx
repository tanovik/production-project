import {  type Decorator } from '@storybook/react';
import { type FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';


export const FeaturesFlagsDecorator =
    (features: FeatureFlags): Decorator => (StoryComponent) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };

