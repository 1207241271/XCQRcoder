//
//  IOTJSONConvertClass.h
//  Electrombile
//
//  Created by yangxu on 2016/12/26.
//  Copyright © 2016年 Wuhan Huake Xunce Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface IOTJSONConvertClass : NSObject
+(NSString *)convertToJSONData:(id)infoDict;
+(NSDictionary *)dictionaryWithJsonString:(NSString *)jsonStr;
@end
