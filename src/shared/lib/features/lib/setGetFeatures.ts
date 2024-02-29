import { LOCAL_STORAGE_LAST_DESIGN_KEY} from '@/shared/const/localStorage'
import { type FeatureFlags } from '@/shared/types/featureFlags'

const defaultFeatures : FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
}
// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags = {
    ...defaultFeatures
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
    if (newFeatureFlags != null) {
        featureFlags = newFeatureFlags
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean | undefined {
    return featureFlags[flag] 
}
export function getAllFeatureFlags(): FeatureFlags {
    return featureFlags
}
